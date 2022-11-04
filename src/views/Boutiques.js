import { useEffect, useState } from 'react'

export default function Boutiques() {
	const [boutiques, setBoutiques] = useState(null)
	const [filter, setFilter] = useState('boutiques')

	useEffect(() => {
		;(async () => {
			const response = await fetch(`http://localhost:8095/${filter}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			})
			const json = await response.json()
			setBoutiques(json.results.bindings)
		})()
	}, [filter])

	// return <>{JSON.stringify(Boutiques)}</>
	return (
		<>
			<select
				name="type"
				id="type"
				onChange={event => setFilter(event.target.value)}
			>
				<option value="boutiques">Boutiques</option>
				<option value="superette">Superette</option>
				<option value="drive-in">Drive-In</option>
			</select>

			<table class="table">
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>address</th>
					</tr>
				</thead>
				<tbody>
					{boutiques?.map(item => (
						<tr>
							<td>{item.idBoutique.value}</td>
							<td>{item.nameBoutique.value}</td>
							<td>{item.address.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
