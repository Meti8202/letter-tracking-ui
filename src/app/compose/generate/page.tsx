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

export default function GenerateLetter() {
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
      </div>
    </>
  );
}