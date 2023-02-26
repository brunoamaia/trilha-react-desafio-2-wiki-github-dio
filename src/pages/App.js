
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
	const [currentRepo, setCurrentRepo] = useState('');
	const [repos, setRepos] = useState([]);

	const handleSearchRepo = async () => {
		api.get(`repos/${currentRepo}`)
			.then((data) => {
				const {description, id, full_name, name, html_url, visibility} = data.data
				const isExist = repos.find(repo => repo.id === id);

				if(!isExist){
					setRepos(prev => [
						...prev,
						{description, id, full_name, name, html_url, visibility}
					]);
					setCurrentRepo('')
					return
				}

				alert('Repositório já mostrado')
			})
			.catch(() => {
				alert('Repositório não encontrado')
			})
	}

	const handleRemoveRepo = (id) => {
		setRepos(prev => prev.filter(repo => repo.id !== id))
	}

	return (
		<Container>
			<img src={gitLogo} width={72} height={72} alt="github logo"/>
			<Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
			<Button onClick={handleSearchRepo}/>
			{repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
		</Container>
	);
}

export default App;
