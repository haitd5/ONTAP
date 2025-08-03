import React, { useEffect, useState } from "react";

// useEffect(callback , [deps])
// có 3 trường hợp sử dụng
// 1. useEffect(callback)
//  - callback sẽ được gọi lại mỗi khi cạp nhật state (setState)
// 2. useEffect(callback , [])
//  - callback chỉ được gọi 1 lần khi component mounted DOM
// 3. useEffect(callback , [deps])
// - callback sẽ được gọi lại khi [deps] thay đổi

// chức năng: side efects (những tác động bên cạnh)
// call API
// Update DOM
// setInteval, setTimeout
// listen event DOM

// input : callback, dependency
// output: void

// Nguyên tắc chung:
// 1. callback luôn được gọi khi component được mounted vào DOM
// 2. components UI sẽ được render -> callback gọi

function UseEffectWithDeps() {
    // logic

    const [postList, setPostList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [activeButton, setActiveButton] = useState("");
    useEffect(() => {
        setIsFetching(true);
        fetch(`http://js-post-api.herokuapp.com/api/posts?_page=${page}`)
            .then((response) => response.json())
            .then((result) => {
                setPostList(result.data);
                const { _totalRows, _limit } = result.pagination;
                setTotalPage(Math.ceil(_totalRows / _limit));
                setIsFetching(false);
                console.log(page);

                // console.log(result.pagination._totalRows);
                // console.log(result.pagination._limit);
            });
    }, [page]);
    const handlePreviousFirst = (e) => {
        e.preventDefault();
        if (page > 1) {
            setPage(1);
        }
        setActiveButton("first");
    };

    const handlePrevious = (e) => {
        e.preventDefault();
        if (page > 1) {
            setPage(page - 1);
        }
        setActiveButton("previous");
    };
    const handleNext = (e) => {
        e.preventDefault();
        if (page < totalPage) {
            setPage(page + 1);
        }
        setActiveButton("next");
    };
    const handlePreviousLast = (e) => {
        e.preventDefault();
        if (page < totalPage) {
            setPage(totalPage);
        }
        setActiveButton("last");
    };
    // UI
    return (
        <div className="">
            <div>
                <ul className="pagination">
                    <li
                        className={`page-item ${page === 1 ? "disabled" : ""} ${
                            activeButton == "first" ? "active" : ""
                        }`}
                    >
                        <a href="#" className="page-link" onClick={handlePreviousFirst}>
                            <span>&laquo;</span>
                        </a>
                    </li>
                    <li className={`page-item ${activeButton == "previous" ? "active" : ""}`}>
                        <a href="#" className="page-link" onClick={handlePrevious}>
                            Previous
                        </a>
                    </li>
                    <li className={`page-item ${activeButton == "next" ? "active" : ""}`}>
                        <a href="#" className="page-link" onClick={handleNext}>
                            Next
                        </a>
                    </li>
                    <li
                        className={`page-item ${page === totalPage ? "disabled" : ""} ${
                            activeButton == "last" ? "active" : ""
                        }`}
                    >
                        <a href="#" className="page-link" onClick={handlePreviousLast}>
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
            <h1>Post list</h1>
            {isFetching ? (
                <p>Loading ...</p>
            ) : (
                <div className="row">
                    {postList.map((post) => (
                        <div key={post.id} className="col-md-6 mb-2">
                            <div className="card">
                                <img src={post.imageUrl} alt=""></img>
                                <div className="card-body">
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UseEffectWithDeps;
