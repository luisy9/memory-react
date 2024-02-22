export const Items = ({ logos, setCardVisible }) => {
    return (
        <>
            {
                logos.map(logo => {
                    return (
                        <div className="border-2 border-white" key={logo.index}
                            onClick={() => setCardVisible(logo.index, logo.isVisible)}>
                            {logo.isVisible === false ? <div className="bg-[#7A8AA4] w-40 h-40 cursor-pointer"></div>
                                :
                                <img src={logo.img} alt={logo.index} className="w-40 h-40" />}</div>
                    )
                })
            }

        </>
    )
}

export default Items
