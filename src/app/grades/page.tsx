import Image from 'next/image';
import GradesPic from '../../../public/Computer-Science-Grades.png';
import TranscriptPic1 from '../../../public/Transcript-1.png';
import TranscriptPic2 from '../../../public/Transcript-2.png';

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-3 px-4 pb-4">
      <h1 className="text-5xl">
        <b>Grades / Transcript</b>
      </h1>
      <Image
        alt="Grades"
        src={GradesPic}
        quality="100"
        priority={true}
        className="max-w-4xl"
      />
      <div className="flex flex-col gap-1">
        <Image
          alt="Transcript 1/2"
          src={TranscriptPic1}
          quality="100"
          priority={true}
          className="max-w-4xl"
        />
        <Image
          alt="Transcript 2/2"
          src={TranscriptPic2}
          quality="100"
          priority={true}
          className="max-w-4xl"
        />
      </div>
    </main>
  );
}
