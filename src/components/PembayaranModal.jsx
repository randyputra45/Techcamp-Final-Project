import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Button from './Button'

const plans = [
    {
      name: 'Alfamart / Alfamidi'
    },
    {
      name: 'Indomaret'
    },
    {
      name: 'GoPay / DANA / OVO'
    },
]
  
const PembayaranModal = (props) => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    const [selected, setSelected] = useState(plans[0])
    
    return (
        <div>
            <div onClick={openModal} className='cursor-pointer p-4 px-6 rounded-lg bg-button w-96'>
                <div className="flex flex-col">
                    <div className="text-sm font-bold">
                        {props.title}
                    </div>
                    <div className="mt-1 text-xxs text-gray-600">
                        {props.desc}
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                        
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="text-lg font-bold leading-6 text-gray-900">
                                    Metode Pembayaran
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Silahkan pilih metode pembayaran yang anda inginkan
                                </p>

                                <div className="pt-6">
                                    <div className="w-full">
                                        <div className="w-full max-w-md mx-auto">
                                            <RadioGroup value={selected} onChange={setSelected}>
                                            <RadioGroup.Label className="sr-only">Metode Pembayaran</RadioGroup.Label>
                                            <div className="space-y-2">
                                                {plans.map((plan) => (
                                                <RadioGroup.Option
                                                    key={plan.name}
                                                    value={plan}
                                                    className={({ checked }) =>
                                                    `
                                                    ${
                                                        checked ? 'bg-pink-700 bg-opacity-75 text-white' : 'bg-button'
                                                    }
                                                        relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none`
                                                    }
                                                >
                                                    {({ checked }) => (
                                                    <>
                                                        <div className="flex items-center justify-between w-full">
                                                            <div className="flex items-center">
                                                                <div className="text-sm">
                                                                <RadioGroup.Label
                                                                    as="p"
                                                                    className={`font-medium  ${
                                                                    checked ? 'text-white' : 'text-gray-900'
                                                                    }`}
                                                                >
                                                                    {plan.name}
                                                                </RadioGroup.Label>
                                                                </div>
                                                            </div>
                                                            {checked && (
                                                            <div className="flex-shrink-0 text-white">
                                                                <CheckIcon className="w-6 h-6" />
                                                            </div>
                                                            )}
                                                        </div>
                                                    </>
                                                    )}
                                                </RadioGroup.Option>
                                                ))}
                                            </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pt-8">
                                    <div onClick={closeModal}>
                                        <Button
                                            title="Selesai"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition> 
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
    )
  }

export default PembayaranModal
