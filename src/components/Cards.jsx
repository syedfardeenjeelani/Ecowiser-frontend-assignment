import React, { useContext, useState } from "react";
import { dataContext } from "../utils/Context";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const Cards = () => {
  const [noteData, setNoteData] = useContext(dataContext);
  const [pinned, setPinned] = useState({});
  const [isPinnedCount, setIsPinnedCount] = useState(0);
  const [editingNote, setEditingNote] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTagline, setEditTagline] = useState("");
  const [editContent, setEditContent] = useState("");

  const deleteNote = (id) => {
    const userDoc = doc(db, "notekeep", id);
    deleteDoc(userDoc);
  };

  const togglePinStatus = (id) => {
    setPinned((prevPinned) => {
      const isCurrentlyPinned = !!prevPinned[id];
      const newPinned = { ...prevPinned };

      if (isCurrentlyPinned) {
        delete newPinned[id];
        setIsPinnedCount((prevCount) => prevCount - 1);
      } else if (isPinnedCount < 2) {
        newPinned[id] = true;
        setIsPinnedCount((prevCount) => prevCount + 1);
      }

      return newPinned;
    });
  };

  const cardsWithPinStatus = noteData.map((card) => ({
    ...card,
    isPinned: pinned[card.id] || false,
  }));

  const sortCards = (cards) => {
    return cards.sort((a, b) => {
      if (a.isPinned && !b.isPinned) {
        return -1;
      } else if (!a.isPinned && b.isPinned) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortedCards = sortCards(cardsWithPinStatus).slice(indexOfFirstCard, indexOfLastCard);

  const startEditing = (note) => {
    setEditingNote(note.id);
    setEditTitle(note.title);
    setEditTagline(note.tagline);
    setEditContent(note.content);
  };

  const updateNote = async (id) => {
    const noteDoc = doc(db, "notekeep", id);
    await updateDoc(noteDoc, {
      title: editTitle,
      tagline: editTagline,
      content: editContent,
    });
    setEditingNote(null);
    setNoteData((prevData) =>
      prevData.map((note) =>
        note.id === id ? { ...note, title: editTitle, tagline: editTagline, content: editContent } : note
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 px-9 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedCards.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95"
          >
            {editingNote === user.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="text-xl font-semibold mb-2 w-full"
                />
                <input
                  type="text"
                  value={editTagline}
                  onChange={(e) => setEditTagline(e.target.value)}
                  className="text-gray-600 mb-4 w-full"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="text-gray-800 mb-4 w-full"
                />
                <button
                  onClick={() => updateNote(user.id)}
                  className="text-gray-600 hover:text-green-500 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingNote(null)}
                  className="text-gray-600 hover:text-red-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h1 className="text-xl font-semibold mb-2">{user.title}</h1>
                <p className="text-gray-600 mb-4">{user.tagline}</p>
                <p className="text-gray-800 mb-4">{user.content}</p>
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => togglePinStatus(user.id)}
                className={`mr-2 ${user.isPinned ? "text-blue-500" : "text-gray-600"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </button>
              <button
                onClick={() => startEditing(user)}
                className="mr-2 text-gray-600 hover:text-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </button>
              <button
                onClick={() => deleteNote(user.id)}
                className="text-gray-600 hover:text-red-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {noteData.length >= cardsPerPage && (
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {Array.from(
              { length: Math.ceil(noteData.length / cardsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50 ${
                    currentPage === i + 1 ? "bg-gray-200" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </>
  );
};

export default Cards;
