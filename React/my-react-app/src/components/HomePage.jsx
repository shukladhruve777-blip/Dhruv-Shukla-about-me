import homePageImg from '../assets/hPage.jpg'
import profileImg from '../assets/profile_Image.jpg'
import '../HomePage.css'

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

    const formattedDate = `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;

    return(
        <div className='homePage'>

            {/* Left side: menu (every icon is different) */}
            <div className='sidebar'>
                <div className='top-Part'>
                    <p className='menu-title'>Menu</p>
                    <div className='icon-button red'><img className='h-Image' src={homePageImg} alt="Home" /></div>
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
                        <p className='right-side'>2nd</p>
                        <p className='left-side'>Year Student</p>
                    </div>
                    <div className='block red'>
                        <p className='right-side'>3.2</p>
                        <p className='left-side'>GPA</p>
                    </div>
                    <div className='block green'>
                        <p className='right-side'>3</p>
                        <p className='left-side'>Coop Term</p>
                    </div>
                </div>

                {/* Table */}
                <div className='task-Table'>
                    <div className='bar'>
                        <div className='bar-left'>
                            <p className='table-title'>Tasks</p>
                        </div>
                        <div className='bar-right'>
                            <button className='add-button'>+ Add Task</button>
                            <button className='add-button'>- Remove Task</button>
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
                        <p>Transcript</p>
                        <p className='asset-number'>1</p>
                    </div>
                </div>

                <div className='box'>
                    <p className='box-title'>Upcoming Projects</p>
                    <div className='asset red'>
                        <p>Get to know me - More Pages</p>
                        <p className='asset-number'>1</p>
                    </div>
                    <div className='asset green'>
                        <p>StudentTable - Additional Options and Pages</p>
                        <p className='asset-number'>1</p>
                    </div>
                    <div className='asset yellow'>
                        <p>Completion: 15th October</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HomePage;