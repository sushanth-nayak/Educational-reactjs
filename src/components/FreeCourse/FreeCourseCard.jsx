import React from "react";

const FreeCourseCard = (props) => {
    const { imgUrl, title, students, rating } = props.item;

    return (
        <div className="single-free-course">
            <div className="free-course-img mb-5">
                <img src={imgUrl} alt="" className="w-100 rounded" />
                <button className="btn free-btn mt-3 border-none ">Free</button>
            </div>

            <div className="free-course-details">
                <h6 className="free-course-title mb-3">{title}</h6>

                <div className=" d-flex align-items-center gap-5">
                    <span className=" d-flex align-items-center gap-2">
                        <i class="ri-user-line"></i> {students}k
                    </span>

                    <span className=" d-flex align-items-center gap-2">
                        <i class="ri-star-fill"></i> {rating}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FreeCourseCard;