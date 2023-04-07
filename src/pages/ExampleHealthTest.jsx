import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import ButtonAction from '../components/ButtonAction'
import ChartBar from '../components/ChartBar'
import DesktopAvatar from '../components/DesktopAvatar'
import useHealthTest from '../hooks/useHealthtest'
import useScreening from '../hooks/useScreening'

const ExampleHealthTest = () => {
    const history = useHistory()
	const {questions} = useHealthTest()

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [stressScore, setStress] = useState(0);
	const [depresiScore, setDepresi] = useState(0);
	const [cemasScore, setCemas] = useState(0);

    const handleAnswerClick = (score) => {
        setStress(stressScore + score.stress);
        setDepresi(depresiScore + score.depresi);
        setCemas(cemasScore + score.cemas);

		const data = {
			stress: stressScore,
			depresi: depresiScore,
			cemas: cemasScore
		}

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
			console.log(data)
            history.push({
				pathname: "/healthtest/result",
				state: data
			})
        }
    }

    // Api consultasi tambah apakah user sudah pernah test
    // Jika sudah langsung tampilkan route /healthtest/hasil

    return (
        <div>
			{
				questions && (
					<>
					<div className="block md:hidden">
						<div className="p-8">
							<ChartBar bar={`bar${currentQuestion + 1}`}/>
							<div className="pt-6 mb-1 text-sm">
								Soal 1
							</div>
							<div className="font-bold text-xl">
								{questions[currentQuestion].question}
							</div>
							<div className="pt-8 grid grid-cols-1 gap-4">
								{questions[currentQuestion].answer.map((answerOption, i) => (
									<button key={i} onClick={() => handleAnswerClick(answerOption)}>
										<ButtonAction key={i} title={`${answerOption.answerText}`}>
										</ButtonAction>
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="bg-begron"></div>
						<div className="topbar w-full">
							<DesktopAvatar />
						</div>
						<div className="pt-52 pb-20 flex items-center justify-center">
							<div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
								<div className="px-8 pt-12 pb-12">
									<ChartBar bar={`bar${currentQuestion}`}/>
									<div className="pt-5">
										<div className="mb-1">Soal {currentQuestion + 1}</div>
										<div className="text-xl font-bold">
											{questions[currentQuestion].question}
										</div>
									</div>
									<div className="pt-12 md:flex flex-col gap-y-4 xl:grid grid-cols-2 gap-x-4">
										{questions[currentQuestion].answer.map((answerOption, i) => (
											<button key={i} onClick={() => handleAnswerClick(answerOption)}>
												<ButtonAction key={i} title={`${answerOption.answerText}`}>
												</ButtonAction>
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					</>
				)
			}
        </div>
    )
}

export default ExampleHealthTest
