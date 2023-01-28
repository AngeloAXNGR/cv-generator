import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";

const About = () => {
	const {formData} = useContext(FormDataContext);
	return (
		<div>
			<h1>About Me</h1>
			<p>{formData.about}</p>
		</div>
	)
}


export default About;