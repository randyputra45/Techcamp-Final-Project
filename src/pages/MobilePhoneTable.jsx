import React from 'react'
import BackButton from '../components/BackButton'
import PhoneCodeColumn from '../components/PhoneCodeColumn'

const MobilePhoneTable = () => {
    return (
        <div>
            <div className="px-6">
                <div className="pt-6">
                    <BackButton />
                </div>
                <div className="pt-12 font-bold text-xl">
                    Phone Number
                </div>
                <div className="pt-8 flex flex-col gap-y-px">
                    <PhoneCodeColumn
                        flag="+61.svg"
                        code="+61"
                        name="Australia"
                    />
                    <PhoneCodeColumn
                        flag="+673.svg"
                        code="+673"
                        name="Brunei Darussalam"
                    />
                    <PhoneCodeColumn
                        flag="+62.svg"
                        code="+62"
                        name="Indonesia"
                    />
                    <PhoneCodeColumn
                        flag="+64.svg"
                        code="+64"
                        name="New Zealand"
                    />
                    <PhoneCodeColumn
                        flag="+63.svg"
                        code="+63"
                        name="Philipine"
                    />
                </div>
            </div>
        </div>
    )
}

export default MobilePhoneTable
