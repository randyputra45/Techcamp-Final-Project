import React from 'react'
import Button from '../components/Button'
import Radio from '../components/ScreeningRadio'


const Screening1 = () => {
    return (
        <div>
            <div className="p-8">
                <div className="text-2xl font-bold pb-8">Screening</div>
                {/* INSTRUKSI */}
                <div className="font-bold mb-1">
                    Instruction
                </div>
                <div className="pb-12">
                For each item, please mark the box for Not True, Somewhat True or Certainly True. It would help us if you answered all items as best you can even if you are not absolutely certain. Please give your answers on the basis of how things have been for you over the last six months.
                </div>

                <Radio 
                    question="Saya mencoba bersikap baik kepada orang lain. Aku peduli dengan perasaan mereka"
                    id1="q1a1"
                    answer1="Tidak Benar"
                    id2="q1a2"
                    answer2="Agak Benar"
                    id3="q1a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="aku gelisah, aku tidak bisa diam lama-lama"
                    id1="q2a1"
                    answer1="Tidak Benar"
                    id2="q2a2"
                    answer2="Agak Benar"
                    id3="q2a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya sering sakit kepala, sakit perut, atau sakit"
                    id1="q3a1"
                    answer1="Tidak Benar"
                    id2="q3a2"
                    answer2="Agak Benar"
                    id3="q3a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya biasanya berbagi dengan orang lain, misalnya video, game, makanan"
                    id1="q4a1"
                    answer1="Tidak Benar"
                    id2="q4a2"
                    answer2="Agak Benar"
                    id3="q4a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya sangat marah dan sering kehilangan kesabaran"
                    id1="q5a1"
                    answer1="Tidak Benar"
                    id2="q5a2"
                    answer2="Agak Benar"
                    id3="q5a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya lebih suka sendirian daripada bersama orang-orang seusia saya"
                    id1="q6a1"
                    answer1="Tidak Benar"
                    id2="q6a2"
                    answer2="Agak Benar"
                    id3="q6a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya biasanya melakukan apa yang diperintahkan"
                    id1="q7a1"
                    answer1="Tidak Benar"
                    id2="q7a2"
                    answer2="Agak Benar"
                    id3="q7a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya sangat mudah khawatir"
                    id1="q8a1"
                    answer1="Tidak Benar"
                    id2="q8a2"
                    answer2="Agak Benar"
                    id3="q8a3"
                    answer3="Tentu Benar"
                />

                <Radio 
                    question="Saya membantu jika seseorang terluka, kesal atau merasa sakit"
                    id1="q9a1"
                    answer1="Tidak Benar"
                    id2="q9a2"
                    answer2="Agak Benar"
                    id3="q9a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya terus-menerus gelisah atau menggeliat"
                    id1="q10a1"
                    answer1="Tidak Benar"
                    id2="q10a2"
                    answer2="Agak Benar"
                    id3="q10a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya punya satu teman baik atau lebih"
                    id1="q11a1"
                    answer1="Tidak Benar"
                    id2="q11a2"
                    answer2="Agak Benar"
                    id3="q11a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya sering berkelahi. Saya dapat membuat orang lain melakukan apa yang saya inginkan"
                    id1="q12a1"
                    answer1="Tidak Benar"
                    id2="q12a2"
                    answer2="Agak Benar"
                    id3="q12a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya sering tidak bahagia, tertekan atau menangis"
                    id1="q13a1"
                    answer1="Tidak Benar"
                    id2="q13a2"
                    answer2="Agak Benar"
                    id3="q13a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Orang lain seusia saya umumnya menyukai saya"
                    id1="q14a1"
                    answer1="Tidak Benar"
                    id2="q14a2"
                    answer2="Agak Benar"
                    id3="q14a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya mudah terganggu, saya sulit berkonsentrasi"
                    id1="q15a1"
                    answer1="Tidak Benar"
                    id2="q15a2"
                    answer2="Agak Benar"
                    id3="q15a3"
                    answer3="Tentu Benar"
                />
                <Radio 
                    question="Saya gugup dalam situasi baru. Saya mudah kehilangan kepercayaan diri"
                    id1="q16a1"
                    answer1="Tidak Benar"
                    id2="q16a2"
                    answer2="Agak Benar"
                    id3="q16a3"
                    answer3="Tentu Benar"
                />

                <div className="pt-4">
                    <Button
                        title="Kirim"
                    />
                </div>

            </div>
        </div>
    )
}

export default Screening1
