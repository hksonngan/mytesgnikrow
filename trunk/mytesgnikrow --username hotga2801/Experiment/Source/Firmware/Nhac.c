#include <LPC23xx.H>
#include "Nhac.h"
#include "string.h"


#define freq_mult 42950

unsigned short sine_table256[] =
{
0x0200,0x020c,0x0219,0x0225,0x0232,0x023e,0x024b,0x0257,0x0264,0x0270,0x027c,0x0289,0x0295,0x02a1,0x02ad,0x02b8,
0x02c4,0x02d0,0x02db,0x02e7,0x02f2,0x02fd,0x0308,0x0312,0x031d,0x0327,0x0332,0x033c,0x0345,0x034f,0x0358,0x0362,
0x036b,0x0373,0x037c,0x0384,0x038c,0x0394,0x039c,0x03a3,0x03aa,0x03b1,0x03b8,0x03be,0x03c4,0x03ca,0x03cf,0x03d5,
0x03d9,0x03de,0x03e2,0x03e6,0x03ea,0x03ee,0x03f1,0x03f4,0x03f6,0x03f8,0x03fa,0x03fc,0x03fd,0x03fe,0x03ff,0x03ff,
0x03ff,0x03ff,0x03ff,0x03fe,0x03fd,0x03fb,0x03f9,0x03f7,0x03f5,0x03f2,0x03ef,0x03ec,0x03e8,0x03e4,0x03e0,0x03dc,
0x03d7,0x03d2,0x03cd,0x03c7,0x03c1,0x03bb,0x03b4,0x03ae,0x03a7,0x03a0,0x0398,0x0390,0x0388,0x0380,0x0378,0x036f,
0x0366,0x035d,0x0354,0x034a,0x0340,0x0337,0x032c,0x0322,0x0318,0x030d,0x0302,0x02f7,0x02ec,0x02e1,0x02d5,0x02ca,
0x02be,0x02b3,0x02a7,0x029b,0x028f,0x0282,0x0276,0x026a,0x025e,0x0251,0x0245,0x0238,0x022c,0x021f,0x0212,0x0206,
0x01f9,0x01ed,0x01e0,0x01d3,0x01c7,0x01ba,0x01ae,0x01a1,0x0195,0x0189,0x017d,0x0170,0x0164,0x0158,0x014c,0x0141,
0x0135,0x012a,0x011e,0x0113,0x0108,0x00fd,0x00f2,0x00e7,0x00dd,0x00d3,0x00c8,0x00bf,0x00b5,0x00ab,0x00a2,0x0099,
0x0090,0x0087,0x007f,0x0077,0x006f,0x0067,0x005f,0x0058,0x0051,0x004b,0x0044,0x003e,0x0038,0x0032,0x002d,0x0028,
0x0023,0x001f,0x001b,0x0017,0x0013,0x0010,0x000d,0x000a,0x0008,0x0006,0x0004,0x0002,0x0001,0x0000,0x0000,0x0000,
0x0000,0x0000,0x0001,0x0002,0x0003,0x0005,0x0007,0x0009,0x000b,0x000e,0x0011,0x0015,0x0019,0x001d,0x0021,0x0026,
0x002a,0x0030,0x0035,0x003b,0x0041,0x0047,0x004e,0x0055,0x005c,0x0063,0x006b,0x0073,0x007b,0x0083,0x008c,0x0094,
0x009d,0x00a7,0x00b0,0x00ba,0x00c3,0x00cd,0x00d8,0x00e2,0x00ed,0x00f7,0x0102,0x010d,0x0118,0x0124,0x012f,0x013b,
0x0147,0x0152,0x015e,0x016a,0x0176,0x0183,0x018f,0x019b,0x01a8,0x01b4,0x01c1,0x01cd,0x01da,0x01e6,0x01f3,0x0200
};

unsigned long piano_Keys[] =   
{
  27,   29,   31,   33,   35,   37,   39,   41,   44,   46,   49,   52, 0,0,0,0,
  55,   58,   62,   65,   69,   73,   78,   82,   87,   92,   98,  104, 0,0,0,0, 
 110,  117,  123,  131,  139,  147,  156,  165,  175,  185,  196,  208, 0,0,0,0, 
 220,  233,  247,  262,  277,  294,  311,  330,  349,  370,  392,  415, 0,0,0,0, 
 440,  466,  494,  523,  554,  587,  622,  659,  698,  740,  784,  831, 0,0,0,0, 
 880,  932,  988, 1046, 1109, 1175, 1244, 1318, 1397, 1480, 1568, 1661, 0,0,0,0, 
1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 0,0,0,0, 
3520, 3729, 3951, 4186
};

unsigned char song_lamb[] = 
{
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x40,0x40,0x40,0x42,0x45,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x42,0x40,0x40,0x42,0x40,0x3a,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x40,0x40,0x40,0x42,0x45,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x42,0x40,0x40,0x42,0x40,0x3a,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x40,0x40,0x40,0x42,0x45,0x45,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x42,0x40,0x40,0x42,0x40,0x3a,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x40,0x40,0x40,0x42,0x45,0x45,0x45,
0x42,0x40,0x3a,0x40,0x42,0x42,0x42,0x42,0x40,0x40,0x42,0x40,0x3a,0x4f
};

unsigned char song_joy[] = 
{
0x37,0x37,0x38,0x3a,0x3a,0x38,0x37,0x35,0x33,0x33,0x35,0x37,0x37,0x35,0x35,
0x37,0x37,0x38,0x3a,0x3a,0x38,0x37,0x35,0x33,0x33,0x35,0x37,0x35,0x33,0x33,
0x35,0x35,0x37,0x33,0x35,0x37,0x38,0x37,0x33,0x35,0x37,0x38,0x37,0x35,0x33,0x35,0x2a,0x37,
0x37,0x38,0x3a,0x3a,0x38,0x37,0x35,0x33,0x33,0x35,0x37,0x35,0x33,0x33,0x3f
};


unsigned char song_custom[512];

int volume = 64;
int accum = 0;
int sample;
int freq;
int iPiano = 0;
int iSizePiano = sizeof(piano_Keys)/sizeof(unsigned long);
int count = 0;
unsigned char * song[] = {song_joy, song_lamb, song_custom};
int iSongSize[3];
 
int iBaiHatA = 0;

__irq void ChayNhac()
{
  count++;
  if(count == 25000)
  {
  		iPiano++;
  		count = 0;
		if(iPiano == iSongSize[iBaiHatA])
			iPiano = 0;
  }


  freq = piano_Keys[song[iBaiHatA][iPiano] + 16];
  accum += freq_mult * freq;

  sample = sine_table256[accum >> 24];
  sample *= volume;

  DACR = (sample & 0xFFC0);

  T0IR        = 1;                      /* Clear interrupt flag               */
  VICVectAddr = 0;                      /* Acknowledge Interrupt              */
}

void InitSong()
{
	//Enable DAC
	PINSEL1 &= (0x03<<20);
	PINSEL1 |= (0x02<<20);
	  /* Enable and setup timer interrupt, start timer                            */
  	T0MR0         = 11999 / 100;                       /* 1msec = 12000-1 at 12.0 MHz */
 	T0MCR         = 3;                           /* Interrupt and Reset on MR0  */
  	T0TCR         = 0;                           /* Timer0 disable               */
  	VICVectAddr4  = (unsigned long)ChayNhac;/* Set Interrupt Vector        */
  	VICVectCntl4  = 15;                          /* use it for Timer0 Interrupt */
  	VICIntEnable  = (1  << 4);                   /* Enable Timer0 Interrupt     */

	iSongSize[0] = sizeof(song_joy);
	iSongSize[1] = sizeof(song_lamb);
	iSongSize[2] = 0;
	 
}

void NhacOn(int iBaiHat)
{
	iBaiHatA = iBaiHat;
	T0TCR = 1;
	count = 0;
	iPiano = 0;
}

void NhacOff(void)
{
	T0TCR = 0;
	count = 0;
	iPiano = 0;
}

void NhacCustom(void *p, int iLen)
{
	memcpy(song_custom, (unsigned char*)p, iLen);
	iSongSize[2] = iLen;
	NhacOn(2);
}

