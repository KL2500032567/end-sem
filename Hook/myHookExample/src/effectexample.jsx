import React , { useEffect, useState }from 'react'

const EffectExample = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        setData(data);
        console.log(data);
    }   
    useEffect(() => {
        getData();
    }, [])
  return (
    <>
        <table border={1} style={{margin:'auto', marginTop:'20px'}}>
            <caption>Users Data</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { data && data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))  
                }
            </tbody>
        </table>
    </>
  )
}

export default EffectExample