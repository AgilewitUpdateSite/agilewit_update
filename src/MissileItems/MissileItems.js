import "./MissileItems.css"

const MissileItems=(props)=>{
    const {MissileItemsInfo}=props
    const {Title,Description}=MissileItemsInfo
    return(
        <div className="MissileItemsTopLayer">
<h3>{Title}</h3>
<p>{Description}</p>
        </div>
    )
}

export default MissileItems