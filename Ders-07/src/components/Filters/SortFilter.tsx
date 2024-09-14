import styles from "./Filter.module.css";

type FilterProps = {
    items: string[],
    onFilter: (value: string) => void,
    filterName?: string
}

const SortFilter = ({ items, onFilter, filterName = "sort" }: FilterProps) => {

    const applyFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onFilter(e.target.value)
        }
    }

    return (
        <div style={{ height: "170px" }}>
            {filterName && <h3 className={styles.filterTitle}>{filterName}</h3>}
            <div className={styles.filters} style={{ height: "140px" }}>
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index} style={{ width: "100%" }}>
                                <label className={styles.filter}>
                                    <input type="radio" value={item} name={filterName}
                                        onChange={applyFilter} style={{ borderRadius: "50%" }} />
                                    <span>{item}</span>
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SortFilter;