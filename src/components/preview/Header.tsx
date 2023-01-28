import { useContext } from 'react'
import { FormDataContext } from '../../contexts/FormContext'
import { PreviewHeader } from './PreviewStyle'

const Header = () => {
	const {formData} = useContext(FormDataContext)
	return (
		<PreviewHeader>
			<h1 style={{margin:0}}>{formData.fullName}</h1>
			<h2 style={{margin:0}}>{formData.position}</h2>
		</PreviewHeader>
	)
}

export default Header