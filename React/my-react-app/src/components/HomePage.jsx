import React from 'react'
import homePageImg from '../assets/hPage.jpg'
import folderPageImg from '../assets/folder.jpg'
import profileImg from '../assets/profile_Image.jpg'

function HomePage(){
    const today = new Date();
    const month = today.toLocaleDateString('en-US', { month: 'long' })
    const year = today.getFullYear();
    const day = today.getDate();

    const getOrdinalSuffix = (dayNum) => {
        if (dayNum > 3 && dayNum < 21) return 'th'; // Catches 11th, 12th, 13th
        switch (dayNum % 10) {
        case 1:  return 'st';
        case 2:  return 'nd';
        case 3:  return 'rd';
        default: return 'th';
        }
    };

    const formattedDate = `${month} ${day}${getOrdinalSuffix(day).toUpperCase()}, ${year}`;


    return(
        <div className='homePage'>
            <div className = 'sidebar'>
                <p><b>Menu</b></p>
                <img className='h-Image' src={homePageImg} alt="Home" />
                <img className='h-Image' src={folderPageImg} alt="Home" />
            </div>

            <div className='middle'>

                <p>{formattedDate}</p>
                <p>Dhruv Shukla</p>

                {/*Middle Section*/}
                <div className='personal-Info'>
                    <div>
                        <p>Employment Status:</p>
                        <p>Full Time Student</p>
                    </div>
                    <div>
                        <p>College Name:</p>
                        <p>Sheridan College</p>
                    </div>
                    <div>
                        <p>Program:</p>
                        <p>Information Systems Engineering</p>
                    </div>
                    <div>
                        <p>Graduate:</p>
                        <p>Dec 2028</p>
                    </div>
                </div>

                <div className='studies-Info'>
                    <div className='block'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasked assigned</p>
                    </div>
                    <div className='block'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasked assigned</p>
                    </div>
                    <div className='block'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasked assigned</p>
                    </div>
                </div>

                <div className='task-Table'>
                    <div className='bar'>
                        <div className='bar-left'>
                            <p>Tasks</p>
                            <p>Date</p>
                        </div>
                        <div className='bar-right'>
                            <select name="cars" id="cars">
                                <option value="completed" selected>Completed</option>
                            </select>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className='table'>
                        <div className='table-bar'>
                            <p>S/N</p>
                            <p>Project</p>
                            <p>Task Name</p>
                            <p>Assigned On</p>
                            <p>Assigned By</p>
                            <p>Status</p>
                        </div>
                        <div className='table-block'>
                            <p>1</p>
                            <p>Get to Know me</p>
                            <p>Dhruv Shukla</p>
                            <p>Jun 01,2026</p>
                            <p><img className='profile-Img' src={profileImg} /> Dhruv Shukla</p>
                            <p>On going</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage;