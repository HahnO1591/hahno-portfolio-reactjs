import React from 'react'

const MicrosoftOffice = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Microsoft Office</h3>

        <div className="skills__box">
            <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <p className="skills__name">Microsoft Word</p>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <p className="skills__name">Microsoft Powerpoint</p>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>


            </div>

            <div className="skills__group">

            <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <p className="skills__name">Microsoft Excel</p>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default MicrosoftOffice