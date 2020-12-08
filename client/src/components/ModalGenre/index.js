import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"


export default function ModalButton({ genre }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
            <h5 className="inputFont text-center">Genre</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor: "red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="modal-bg inputFont">
                    Pick A Genre
                </Modal.Header>
                <Modal.Body className="modal-bg">
                    <ListGroup >
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Action And Adventure" value="10673,10702,11804,11828,1192487,1365,1568,2125,2653,43040,43048,4344,46576,7442,75418,76501,77232,788212,801362,899,9584" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Action and Adventure</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Musicals" value="13335,13573,32392,52852,55774,59433,84488,88635" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Musicals</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Sci-Fi"value="1492,108533,11014,1372,1568,1694,2595,2729,3327,3916,47147,4734,49110,50232,52780,52849,5903,6000,6926,852491" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Sci-Fi</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Fantasy" value="9744" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Fantasy</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Thrillers" value="10306,10499,10504,10719,11014,11140,1138506,1321,1774,3269,43048,46588,5505,58798,65558,6867,75390,78507,799,852488,8933,98911,9147,972" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Thrillers</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Anime" value="10695,11146,2653,2729,3063,413820,452,6721,9302,7424" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Anime</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Children and Family" value="10056,27480,27950,28034,28083,28233,48586,5455,561,6218,6796,6962,78120,89513,783" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Children and Family</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Comedies" value="1009,10256,10375,105,10778,11559,11755,1208951,1333288,1402,1747,17648,2030,2700,31694,3300,34157,3519,3996,4058,4195,43040,4426,4906,52104,52140,52847,5286,5475,5610,56174,58905,59169,61132,61330,6197,63092,63115,6548,711366,7120,72407,7539,77599,77907,78163,78655,79871,7992,852492,869,89585,9302,9434,9702,9736" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Comedies</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Documentaries" value="10005,10105,10599,1159,15456,180,2595,2616,2760,28269,3652,3675,4006,4720,48768,49110,49547,50232,5161,5349,55087,56178,58710,60026,6839,7018,72384,77245,852494,90361,9875" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Documentaries</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Dramas" value="11,11075,11714,1208954,1255,12995,13158,2150,25955,26009,2696,2748,2757,2893,29809,3179,31901,34204,3653,3682,384,3916,3947,4282,4425,452,4961,500,5012,52148,52904,56169,58755,58796,59064,6206,62235,6616,6763,68699,6889,711367,71591,71591,72354,7243,7539,75459,76507,78628,852493,89804,9299,9847,9873,5763" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Dramas</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Sports" value="180,25788,4370,5286,7243,9327" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Sports</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Horror" value="10695,10944,1694,42023,45028,48303,61546,75405,75804,75930,8195,83059,8711,89585" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Horror</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Romance" value="29281,36103,502675" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Romance</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Classics" value="10032,11093,13158,29809,2994,31273,31574,31694,32392,46553,46560,46576,46588,47147,47465,48303,48586,48744,76186" onClick={e => {genre(e.target.value); changeButton(e.target.name); handleClose()}}>Classics</Button></ListGroup.Item> 
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}


