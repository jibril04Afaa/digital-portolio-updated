import { LuGraduationCap } from "react-icons/lu"
import { IoBriefcaseOutline } from "react-icons/io5"

const XPandEduc = () => {
  return (
    <div className="mt-32">
        {/* Inner Container */}
        <div className="sm:flex justify-center items-center">
            <div className="flex sm:flex-col tablet:justify-around">
                {/* Experience */}
                <div className="sm:items-center tablet:flex-col w-96 gap-4">
                    {/* Title */}
                    <div className='flex justify-center items-center sm:mb-4'>
                        <IoBriefcaseOutline className="text-4xl"/>
                        <p className='font-bold tablet:text-3xl'>My Experience</p>
                    </div>

                    {/* Experiences stuff */}
                    <div className="flex items-center tablet:w-80 flex-col gap-2">
                        {/* Internship 1 */}
                        <div className="border-2 rounded-2xl sm:w-64 tablet: p-4 w-96 cursor-pointer">
                            {/* Timeline */}
                            <div>
                                <p> Jan 2025 - Present</p>
                            </div>

                            {/* Title */}
                            <div>
                                <p className="font-bold">Web Developer Intern</p>
                            </div>

                            {/* Company */}
                            <div>
                                <p>Alli Marketplace</p>
                            </div>

                            {/* Location */}
                            <div>
                                <p>Remote</p>
                            </div>
                        </div>

                        {/* Research 1 */}
                        <div className="border-2 rounded-2xl sm:w-64 tablet: p-4 w-96 cursor-pointer">
                            {/* Timeline */}
                            <div>
                                <p>Jan 2025 - Present</p>
                            </div>

                            {/* Title */}
                            <div>
                                <p className="font-bold">Research Assistant</p>
                            </div>

                            {/* Company */}
                            <div>
                                <p>Penn State University</p>
                            </div>

                            {/* Location */}
                            <div>
                                <p>Remote</p>
                            </div>
                        </div>


                        {/* Internship 2 */}
                        <div className="border-2 rounded-2xl sm:w-64 tablet: p-4 w-96 cursor-pointer">
                            {/* Timeline */}
                            <div>
                                <p> May 2024 - August 2024</p>
                            </div>

                            {/* Title */}
                            <div>
                                <p className="font-bold">Software Engineer Intern</p>
                            </div>

                            {/* Company */}
                            <div>
                                <p>Axon Information Systems</p>
                            </div>

                            {/* Location */}
                            <div>
                                <p>Accra, Ghana</p>
                            </div>
                        </div>


                        {/* RA */}
                        <div className="border-2 rounded-2xl sm:w-64 tablet: p-4 w-96 cursor-pointer">
                            {/* Timeline */}
                            <div>
                                <p> May 2024 - August 2024</p>
                            </div>

                            {/* Title */}
                            <div>
                                <p className="font-bold">Resident Assistant</p>
                            </div>

                            {/* Company */}
                            <div>
                                <p>Penn State University</p>
                            </div>

                            {/* Location */}
                            <div>
                                <p>State College, PA</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Education */}
                <div className="flex flex-col items-center w-96 gap-4">
                    {/* Title */}
                    <div className='flex items-center sm:mt-8 mb-2'>
                        <LuGraduationCap className="text-4xl"/>
                        <p className='tablet:text-3xl font-bold'>My Education</p>
                    </div>

                    {/* Education stuff */}
                    <div className="tablet:w-80 flex flex-col gap-2">
                        {/* Education 1 */}
                        <div className="border-2 rounded-2xl sm:w-64 tablet: p-4 w-96 cursor-pointer">
                            {/* Timeline */}
                            <div>
                                <p>Expected Graduation - June 2026</p>
                            </div>

                            {/* Title */}
                            <div>
                                <p className="font-bold">B.S Computer Science</p>
                            </div>

                            {/* Company */}
                            <div>
                                <p>The Pennsylvania State University</p>
                            </div>

                            {/* Location */}
                            <div>
                                <p>State College, PA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default XPandEduc