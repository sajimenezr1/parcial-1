import { useEffect, useState } from "react"
import './home.css'
import { FormattedMessage } from "react-intl"


export const Home = () => {

    const [selectedRobot, setSelectedRobot] = useState({ nombre: "", añoFabricacion: "", capacidadProcesamiento: "", humor: "", imagen: ""});
    const [dataRobots, setDataRobots] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        const url = 'http://localhost:3001/robots';
        fetch(url).then(data => data.json()).then(data => setDataRobots(data))
    }, []);

    const handleClickRow = (robot) => {
        const { nombre, añoFabricacion, capacidadProcesamiento, humor, imagen, id } = robot;
        setSelectedRobot({ nombre, añoFabricacion, capacidadProcesamiento, humor, imagen })
        setSelectedImage(`https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot${id}.png`)
    }

    const renderTable = () => {
        const data = []
        dataRobots.forEach(robot => {
            data.push(
                <tr className="table-select" onClick={() => handleClickRow(robot)} key={robot.id}>
                    <th>{robot.id}</th>
                    <td>{robot.nombre}</td>
                    <td>{robot.modelo}</td>
                    <td>{robot.empresaFabricante}</td>
                </tr>
            )
        })
        return data;
    }

    const renderDetail = () => {
        if(selectedRobot.nombre != ""){
        return (
            <div className="col-4 bg-body-secondary border border-black p-4">
                <div className="container d-flex flex-column align-items-center justify-items-center">
                    <p><b>{selectedRobot.nombre}</b></p>
                    <img src={selectedImage} alt={selectedRobot.humor} className='img-detail border-black' />
                </div>
                <ul className="custom-icon-list">
                    <li><b><FormattedMessage id="FabricationYear"/> </b> {selectedRobot.añoFabricacion} </li>
                    <li><b><FormattedMessage id="ProcessingCapacity"/> </b> {selectedRobot.capacidadProcesamiento}</li>
                    <li><b><FormattedMessage id="Humor"/> </b>{selectedRobot.humor}</li>
                </ul>
            </div>
        )}
    }

    return (
        <div className="home container-flex p-3">
            <div className="row">
                <div className="col-8">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th><FormattedMessage id="Name"/></th>
                                <th><FormattedMessage id="Model"/></th>
                                <th><FormattedMessage id="ManufacturerBrand"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTable()}
                        </tbody>
                    </table>
                </div>
                {renderDetail()}
            </div>
        </div>
    )

}



