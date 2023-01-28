import { useContext, forwardRef } from "react";
import { FormDataContext } from "../../contexts/FormContext";
import { PreviewWrapper, PreviewMain, ProfileSection, ProfileImage, ProfileSummary, QualificationSummary } from "./PreviewStyle";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";


const Preview = forwardRef((props:any, previewRef:any) => {
	const {formData} = useContext(FormDataContext);

	return (
		<PreviewWrapper ref={previewRef}>
			<Header/>
			<PreviewMain>
				<ProfileSection>
					<div style={{marginTop: 20, textAlign:"center"}}>
						<ProfileImage src={formData.profilePicture} alt="" />
					</div>

					<ProfileSummary>
						<Contact/>
						<About/>
					</ProfileSummary>
				</ProfileSection>

				<QualificationSummary>	
						<Education/>
						<Skills/>
						<Experience/>
				</QualificationSummary>
			</PreviewMain>
		</PreviewWrapper>
	)
})

export default Preview;