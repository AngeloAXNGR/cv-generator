import { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";
import { PreviewUL } from "./PreviewStyle";

const Experience = () => {
	const {formData} = useContext(FormDataContext);
	const [experiences, setExperiences] = useState<string[]>([]);

	useEffect(() => {
		setExperiences(formData.experiences.split(','));
	},[formData.experiences])

	const experienceList = experiences.map((experience) => {return <li>{experience}</li>})
	return (
		<div>
			<h1>Experience / Projects</h1>
			<PreviewUL>
				{experienceList}
			</PreviewUL>
		</div>
	)
}


export default Experience;