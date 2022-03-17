import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}

	body {
    letter-spacing: -0.02em;
    background-color: var(--light-gray);
		color: #333;
		font-family: 'Pretendard Variable';
  }

	a {
		text-decoration: none;
		color: #333;
	}

	button {
		font-family: 'Pretendard Variable';
	}

	:root {
		--main-blue: #3D57C2;
		--sub-blue: #7281D6;
		--light-blue: #EAECFD;
		--dark-gray: #8B8C93;
		--gray: #D4D5DD;
		--light-gray: #F6F4FC;
	}
`;

export default GlobalStyles;
