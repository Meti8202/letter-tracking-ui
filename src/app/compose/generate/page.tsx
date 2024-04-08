/* eslint-disable react/jsx-no-undef */
"use client";
import ClosingSalutation from "@/components/LetterTemplate/ClosingSalutation";
import DateComponent from "@/components/LetterTemplate/Date";
import LetterBody from "@/components/LetterTemplate/LetterBody";
import RecipientContactAddress from "@/components/LetterTemplate/RecipientAddress";
import Salutation from "@/components/LetterTemplate/Salutation";
import SenderContactAddress from "@/components/LetterTemplate/SenderAddress";
import Signature from "@/components/LetterTemplate/Signature";
import SubjectLine from "@/components/LetterTemplate/SubjectLine";
import { useRouter } from "next/navigation";

export default function GenerateLetter() {
  const router = useRouter();

  const handleGenerate = () => {
    // Logic for generating the letter goes here

    // Navigate to the preview page
    router.push("/compose/preview");
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-5 mt-11 ml-8 mr-6">
          Compose Letter
        </h2>
        <div className="grid gap-1 m-11">
          <DateComponent />
          <RecipientContactAddress />
          <SubjectLine />
          <Salutation />
          <LetterBody />
          <ClosingSalutation />
          <Signature />
          <SenderContactAddress />
        </div>
        <button
          onClick={handleGenerate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-8"
        >
          Generate Letter
        </button>
      </div>
    </>
  );
}
