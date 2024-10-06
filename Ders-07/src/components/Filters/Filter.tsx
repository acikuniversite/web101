import { useState } from "react";
import styles from "./Filter.module.css";

type FilterProps = {
  items: string[],
  onFilter: (value: string) => void,
  removeFilter: (value: string) => void,
  filterName?: string
}

const Filter = ({ items, onFilter, removeFilter, filterName }: FilterProps) => {
  const [searchFilter, setSearchFilter] = useState<string>("");

  const applyFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onFilter(e.target.name)
    }
    else {
      removeFilter(e.target.name)
    }
  }


  const filterFilters = () => {
    return items.filter(item => item.toLowerCase().includes(searchFilter.toLowerCase()));
  }

  return (
    <div>
      {filterName && <h3 className={styles.filterTitle}>{filterName}</h3>}
      <div className={styles.filters}>
        <label className={styles.searchFilter}>
          <input type="search" placeholder="Search" onChange={(e) => setSearchFilter(e.target.value)} />
        </label>
        <ul>
          {
            filterFilters().map((item, index) => (
              <li key={index}>
                <label className={styles.filter}>
                  <input type="checkbox" name={item} onChange={applyFilter} />
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

export default Filter