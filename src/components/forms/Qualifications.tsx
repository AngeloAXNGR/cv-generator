import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";
import { StyledFormSections, EducationSection, FormInput, TextArea,FormH1, FormH2} from "./FormStyle";

const Qualifications = () => {
	const {formData, handleFormInput} = useContext(FormDataContext);
	return (
		<StyledFormSections>
			<EducationSection>
				<FormH1>Education</FormH1>
				<FormH2>College</FormH2>
				<FormInput
					type="text"
					name="collegeDegree"
					value={formData.collegeDegree}
					placeholder="College Degree"
					onChange={(e) => {handleFormInput(e)}}
				/>
				<FormInput
					type="text"
					name="universityName"
					value={formData.universityName}
					placeholder="University Name"
					onChange={(e) => {handleFormInput(e)}}
				/>
				<FormInput
					type="text"
					name="collegeStartDate"
					value={formData.collegeStartDate}
					placeholder="Start Date"
					onChange={(e) => {handleFormInput(e)}}
				/>

				<FormInput
					type="text"
					name="collegeEndDate"
					value={formData.collegeEndDate}
					placeholder="End Date"
					onChange={(e) => {handleFormInput(e)}}
				/>
				
				<FormH2>High School</FormH2>
				<FormInput
					type="text"
					name="highSchoolDegree"
					value={formData.highSchoolDegree}
					placeholder="High School Degree"
					onChange={(e) => {handleFormInput(e)}}
				/>
				<FormInput
					type="text"
					name="highSchoolName"
					value={formData.highSchoolName}
					placeholder="High School Name"
					onChange={(e) => {handleFormInput(e)}}
				/>
				<FormInput
					type="text"
					name="highSchoolStartDate"
					value={formData.highSchoolStartDate}
					placeholder="Start Date"
					onChange={(e) => {handleFormInput(e)}}
				/>

				<FormInput
					type="text"
					name="highSchoolEndDate"
					value={formData.highSchoolEndDate}
					placeholder="End Date"
					onChange={(e) => {handleFormInput(e)}}
				/>
			</EducationSection>

			<FormH1>Skills</FormH1>
			<TextArea
				maxLength={300}
				name="skills"
				cols={30}
				rows={5}
				placeholder="Separate skills with comma (Example: Python, JavaScript, ...)"
				onChange={(e) => handleFormInput(e)}
				value={formData.skills}
			/>
			<FormH1>Experience / Projects</FormH1>
			<TextArea
				maxLength={300}
				name="experiences"
				cols={30}
				rows={5}
				placeholder="Separate experiences with comma (Example: eCommerce Site, Homepage, ...)"
				onChange={(e) => handleFormInput(e)}
				value={formData.experiences}
			/>
		</StyledFormSections>
	)
}


export default Qualifications