'use client';

import Image from 'next/image';
import GradesPic from '../../../public/Computer-Science-Grades.png'
import TranscriptPic1 from '../../../public/Transcript-1.png'
import TranscriptPic2 from '../../../public/Transcript-2.png'

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <h1>Grades / Transcript</h1>
      <Image
              alt="Grades"
              src={GradesPic}
              quality="95"
              priority={true}
            />
            <Image
              alt="Transcript 1/2"
              src={TranscriptPic1}
              quality="95"
              priority={true}
            />
            <Image
              alt="Transcript 2/2"
              src={TranscriptPic2}
              quality="95"
              priority={true}
            />
    </main>
  );
}
