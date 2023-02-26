import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {
	const handleRemove = () => {
		handleRemoveRepo(repo.id)
	}

	return (
		<ItemContainer>
				<h3>{repo.name}</h3>
				<h4>{repo.full_name}</h4>
				<p>{repo.description}</p>
				<a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
				<button rel="noreferrer" onClick={handleRemove}>Remover</button>
				<hr />
		</ItemContainer>
	)
}

export default ItemRepo;
