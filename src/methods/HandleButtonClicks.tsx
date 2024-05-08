import { GetUrlRoot } from "@/api/BackendAPI";
import { useState } from "react";
import Modal from 'react-modal';

// Popup that asks you to fill in the personal number (has to be 0-9 and 11 in length)
export async function handleJoinButtonPopUpClick() {
    
}

// Sends post request with personal number as payload and upon recv response checks if
// canbesignedup is true or false. If false, show "Sorry, you cannot". If true, further check
// if documentsigned from response if true or false. If true, redirect to /singed_document, if false,
// proceed redirecting to /signup_successful
export async function handleJoinButtonClick() {
    try {
        window.location.href = `${GetUrlRoot()}/api/Auth/bankid`;
    } catch (error) {
        console.error(`During handleJoinButtonClick exception happened: ${error}`);
    }
}

export async function handleSeDokumentClick() {
    try {
        window.location.href = `${GetUrlRoot()}/api/Signature/sign`;
    } catch (error) {
        console.error(`During handleJoinButtonClick exception happened: ${error}`);
    }
}