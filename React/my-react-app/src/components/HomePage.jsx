import homePageImg from '../assets/hPage.jpg'
import folderPageImg from '../assets/folder.jpg'
import profileImg from '../assets/profile_Image.jpg'

function HomePage(){
    const today = new Date();
    const month = today.toLocaleDateString('en-US', { month: 'long' })
    const year = today.getFullYear();
    const day = today.getDate();

    const getOrdinalSuffix = (dayNum) => {
        if (dayNum > 3 && dayNum < 21) return 'th'; // adds the "st,nd,rd,th" to the date
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

            {/* Left side: menu (every icon is different) */}
            <div className='sidebar'>
                <div className='top-Part'>
                    <p className='menu-title'>Menu</p>
                    <div className='icon-button yellow'><img className='h-Image' src={homePageImg} alt="Home" /></div>
                    <div className='icon-button red'><img className='h-Image' src={folderPageImg} alt="Folder" /></div>
                </div>
                <div className='bottom-Part'>
                    <div className='icon-botton'><img className='sidebar-Profile' src={profileImg} alt="" /></div>
                </div>
            </div>

            {/* Middle: main content */}
            <div className='middle'>

                <p className='date'>{formattedDate}</p>
                <p className='name'>Dhruv Shukla!</p>

                {/* Personal info */}
                <div className='personal-Info'>
                    <div>
                        <p className='label'>Employment Status:</p>
                        <p className='value'>Full Time Student</p>
                    </div>
                    <div>
                        <p className='label'>College Name:</p>
                        <p className='value'>Sheridan College</p>
                    </div>
                    <div>
                        <p className='label'>Program:</p>
                        <p className='value'>Information Systems Engineering</p>
                    </div>
                    <div>
                        <p className='label'>Graduate:</p>
                        <p className='value'>Dec 2028</p>
                    </div>
                </div>

                {/* Three colored cards */}
                <div className='studies-Info'>
                    <div className='block yellow'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasks Assigned</p>
                    </div>
                    <div className='block red'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasks Assigned</p>
                    </div>
                    <div className='block green'>
                        <p className='right-side'>10</p>
                        <p className='left-side'>Tasks Assigned</p>
                    </div>
                </div>

                {/* Table */}
                <div className='task-Table'>
                    <div className='bar'>
                        <div className='bar-left'>
                            <p className='table-title'>Tasks</p>
                        </div>
                        <div className='bar-right'>
                            <select name="cars" id="cars" defaultValue="completed">
                                <option value="completed">Completed</option>
                            </select>
                            <button className='add-button'>+ Add Task</button>
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
                            <p>Sept 01,2026</p>
                            <p><img className='profile-Img' src={profileImg} /> Dhruv Shukla</p>
                            <p><span className='status yellow'>On going</span></p>
                        </div>
                        <div className='table-block'>
                            <p>2</p>
                            <p>StudentTable</p>
                            <p>Student Management</p>
                            <p>Jun 01,2026</p>
                            <p><img className='profile-Img' src={profileImg} /> Dhruv Shukla</p>
                            <p><span className='status green'>Completed</span></p>
                        </div>
                        <div className='table-block'>
                            <p>3</p>
                            <p>Mini Games</p>
                            <p>QuickGames</p>
                            <p>Jun 01,2026</p>
                            <p><img className='profile-Img' src={profileImg} /> Dhruv Shukla</p>
                            <p><span className='status green'>Completed</span></p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right side: two extra boxes */}
            <div className='right'>

                <div className='box'>
                    <p className='box-title'>My Documents</p>
                    <div className='asset-row'>
                        <p>Resume</p>
                        <p className='asset-number'>1</p>
                    </div>
                    <div className='asset-row'>
                        <p>Projects</p>
                        <p className='asset-number'>3</p>
                    </div>
                    <div className='asset-row'>
                        <p></p>
                        <p className='asset-number'>2</p>
                    </div>
                </div>

                <div className='box'>
                    <p className='box-title'>Daily Schedule</p>
                    <div className='event yellow'>
                        <p><b>9AM - 11AM</b></p>
                        <p>Classes at Sheridan</p>
                    </div>
                    <div className='event green'>
                        <p><b>1PM - 3PM</b></p>
                        <p>Work on projects</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HomePage;