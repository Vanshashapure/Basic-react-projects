export default function Price({ oldPrice, newPrice }) {
    let oldstyle = {
        textDecorationLine: "line-through",
    };
    let newstyle = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#e0c367",
        height: "25px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };

    return (
        <div style={styles}>
            <span style={oldstyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyle}>{newPrice}</span>
        </div>
    );
}