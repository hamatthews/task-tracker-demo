import styles from '../styles/Test.module.css';

type person = {
    firstName: string,
    middleName?: string,
    lastName: string,
    age: number
}

type props = {
    people: person[]
}

export default function Test(props: props) : JSX.Element {
    return (
        <div className={styles.color}>
            {props.people.map((e: person) => {
                return e.middleName
            })}
        </div>
    )
}