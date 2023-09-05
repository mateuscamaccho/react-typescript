import { Form } from "react-router-dom";
import React, { useState } from 'react';
import './index.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export default function Contact() {
    interface ConfirmationModalProps {
        message: string;
        onConfirm: () => void;
    }

    const handleDelete = () => {
        // Your delete logic here
        console.log('Deleting contact...');
    };

    const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm }) => {
        const [isOpen, setIsOpen] = useState(false);

        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);

        const handleConfirm = () => {
            onConfirm();
            closeModal();
        };
        return (
            <>
                <button type="button" onClick={openModal} className="button" style={{ color: "red", fontWeight: "500" }}>
                    Delete
                </button>
                <div>
                    {isOpen && (
                        <div className="modal bts">
                            <p>{message}</p>
                            <button onClick={handleConfirm} className="button">Confirm</button>
                            <button onClick={closeModal} className="button">Cancel</button>
                        </div>
                    )}
                </div>
            </>
        );
    };

    const contact = {
        first: "Mateus",
        last: "Camacho",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "@camachoom",
        notes: "Tempor fugiat consequat id et voluptate. Aliquip pariatur aute voluptate esse in et. Anim ipsum excepteur ex cupidatat aliquip excepteur aute.",
        favorite: true,
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-avatar">
                <img
                    key={contact.avatar}
                    src={contact.avatar}
                    alt="Avatar"
                />
            </div>

            <div className="contact-info">
                <h1 className="contact-name">
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact} />
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}
                            rel="noreferrer"
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p style={{ padding: "10px 0px" }}>{contact.notes}</p>}

                <div className="bts">
                    <Form action="edit">
                        <button type="submit" className="button fle" style={{ color: "blue", fontWeight: "500" }}>Edit</button>
                    </Form>
                    <ConfirmationModal
                        message="Please confirm you want to delete this record."
                        onConfirm={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}

function Favorite(contact: any) {
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button
                className="star-btn"
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? <AiFillStar size={"2em"} /> : <AiOutlineStar size={"2em"} />}
            </button>
        </Form>
    );
}