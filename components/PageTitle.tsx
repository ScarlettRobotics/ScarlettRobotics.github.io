import styles from "../styles/Page.module.css"

const PageTitle = (props: {title:string, background:StaticImageData}) => {
    return (
        <>
            <header className={styles.pageTitleHeader} style={{backgroundImage:`url(${props.background.src})`}}>
                <h1>{props.title}</h1>
            </header>
            <div className={styles.spacer}></div>
        </>
    )
}

export default PageTitle;