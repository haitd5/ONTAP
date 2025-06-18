import React, { useState } from "react";
import SuccessAlert from "../Alert/SuccessAlert";
import { toast } from "react-toastify";

function PlayListApp() {
    const [playlist, setPlaylist] = useState([
        "Cơn mưa ngang qua",
        "Ghé qua",
        "Lặng thầm một tình yêu",
        "Tạm biệt",
        "Thương hoài miền trung",
    ]);
    const [music, setMusic] = useState();
    const [selectIndex, setSelectIndex] = useState(-1);
    const [newMusic, setNewMusic] = useState();
    // const [showAlert, setShowAlert] = useState(false);

    const handleAddMusic = (e) => {
        e.preventDefault();
        setPlaylist([...playlist, music]);
        setMusic("");
        // setShowAlert(true);
    };
    const handleRemoveMusic = (idx, music) => {
        // let newPlaylist = playlist.filter((item, index) => index != idx);
        // setPlaylist(newPlaylist);
        let confirm = window.confirm(`Are you sure to remove music ${music}`);
        if (confirm) {
            setPlaylist((prev) => {
                let newPlaylist = prev.filter((item, index) => index !== idx);
                return newPlaylist;
            });
        }
    };
    const handleCancelMusic = () => {
        setSelectIndex(-1);
        setNewMusic("");
    };
    const handleUpdateMusic = (idx) => {
        if (newMusic) {
            playlist[idx] = newMusic;
        }
        setNewMusic("");
        setPlaylist(playlist);
        setSelectIndex(-1);
        // setShowAlert(true);
        toast.success("🦄 Wow so easy! Music update success", { autoClose: 2000, position: "top-right" });
    };
    return (
        <>
            <div className="container">
                <h1 className="text-success">
                    Playlist Music
                    <i className="fa-solid fa-music ms-3"></i>
                </h1>
                {/* <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Music update success"} /> */}
                <form onSubmit={handleAddMusic} className="w-75 mt-2">
                    <div className="form-group d-flex">
                        <input
                            type="text"
                            className="form-control w-75 me-2"
                            value={music}
                            required
                            onInput={(e) => setMusic(e.target.value)}
                        />
                        <button className="btn btn-sm btn-success">
                            <i className="fa-solid fa-plus me-2"></i>
                            Add to Playlist
                        </button>
                    </div>
                </form>
                <div className="mt-3 w-50">
                    <ul className="list-group">
                        {playlist.map((music, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-item-center"
                            >
                                {selectIndex == index ? (
                                    <input
                                        className="form-control me-2"
                                        value={newMusic || music}
                                        onInput={(e) => setNewMusic(e.target.value)}
                                    />
                                ) : (
                                    music
                                )}
                                <div className="d-flex">
                                    {selectIndex == index ? (
                                        <>
                                            <span
                                                className="d-inline-block me-2"
                                                data-bs-toggle="tooltip"
                                                title="save music"
                                            >
                                                <i
                                                    role="button"
                                                    className="fa-solid fa-floppy-disk text-primary"
                                                    onClick={() => handleUpdateMusic(index)}
                                                ></i>
                                            </span>
                                            <span
                                                className="d-inline-block"
                                                data-bs-toggle="tooltip"
                                                title="cancel music"
                                            >
                                                <i
                                                    role="button"
                                                    className="fa-solid fa-rectangle-xmark text-dark"
                                                    onClick={handleCancelMusic}
                                                ></i>
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span
                                                className="d-inline-block me-2"
                                                data-bs-toggle="tooltip"
                                                title="edit music"
                                            >
                                                <i
                                                    role="button"
                                                    className="fa-solid fa-pen-to-square text-success"
                                                    onClick={() => setSelectIndex(index)}
                                                ></i>
                                            </span>
                                            <span
                                                className="d-inline-block"
                                                data-bs-toggle="tooltip"
                                                title="delete music"
                                            >
                                                <i
                                                    role="button"
                                                    className="fa-solid fa-trash text-danger"
                                                    onClick={() => handleRemoveMusic(index, music)}
                                                ></i>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PlayListApp;
