'use client'

import { useState } from "react";
import {GetSignUpStatus, GetUrlRoot} from "@/api/BackendAPI";

export const SignUpModal = ({onClose, setPage}:{onClose: () => void, setPage: (page: string) => void}) => {
    const [personalNumber, setPersonalNumber] = useState('');

    const handlePersonalNumberChange = (event: any) => {
        const { value } = event.target
        if (value === '' || (value.length <= 11 && /^\d*$/.test(value))) {
            setPersonalNumber(value);
        }
    };

    const handleJoinButtonPopUpClick = async () => {
        if (personalNumber.length !== 11) {
            console.error('Personnummer må være 11 sifer');
            return;
        }

        try {
            const response = await GetSignUpStatus({personalNumber});
            const { canBeSignedUp, documentSigned } = response.data;
            if (!canBeSignedUp) {
                setPage("signupUnsuccessful");
            } else if (documentSigned) {
                console.log("Setting to signed document");
                setPage('signedDocument');
            } else {
                setPage('signupSuccessful');
            }
        } catch (error) {
            console.error(`Exception during the signup status check: ${error}`);
        }

    };
    
    return (
        <div tabIndex={-1} aria-hidden="true" 
             className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Trenger litt mer info om deg!
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal" onClick={onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap={"round"} strokeLinejoin={"round"}
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hva er ditt personnummer?</label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Personnummer" required={true}
                                       value={personalNumber}
                                       onChange={handlePersonalNumberChange}
                                       maxLength={11} />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="category"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bilforsikring hos</label>
                                <select id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="TV">If</option>
                                    <option value="PC">Trygg</option>
                                    <option value="GA">Gjensidige</option>
                                    <option value="PH">Sparebank 1</option>
                                </select>
                            </div>
                        </div>
                        <button type="button"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleJoinButtonPopUpClick}>
                            Bli med
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
