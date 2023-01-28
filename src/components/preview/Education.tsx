import { useContext } from "react"
import { FormDataContext } from "../../contexts/FormContext"
import { EducationContent } from "./PreviewStyle";

const Education = () => {
	const {formData} = useContext(FormDataContext);
	return (
		<div>
			<h1 style={{margin:0, marginTop:20}}>Education</h1>
			<EducationContent>
				<div>
					<h3>{formData.collegeDegree}</h3>
					<p>{formData.universityName}</p>
					<p>{formData.collegeStartDate} - {formData.collegeEndDate}</p>
				</div>
				<div>
					<h3>{formData.highSchoolDegree}</h3>
					<p>{formData.highSchoolName}</p>
					<p>{formData.highSchoolStartDate} - {formData.highSchoolEndDate}</p>
				</div>
			</EducationContent>
		</div>
	)
}


export default Education ;
