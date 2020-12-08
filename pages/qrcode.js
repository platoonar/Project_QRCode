import Link from "next/link";
import Theme from "../components/theme";
import QRCode from "react-qr-code";
import { useState } from "react";


const QrcodeFN = (props) => {
  const [state, setState] = useState({
    Qr_Check: "",
    subjectdata: "",
    Subject_id: "1123",
  })

  const onValueChange = (q) => {
    setState({
      ...state,
      Qr_Check: q.target.value,
    });
  };

  return <div>Index Page1
    <br></br>
    <Link href="/home">
      <a>Qrcode</a>
    </Link>

    <QRCode value={state.Qr_Check} ></QRCode>

    <div className="form-group">
      <input
        type="text"
        value={state.Qr_Check}
        onChange={onValueChange}
        placeholder="กรอกคิวอาร์โค้ด"
      />
    </div>
  </div>
};


export default Theme(QrcodeFN);
