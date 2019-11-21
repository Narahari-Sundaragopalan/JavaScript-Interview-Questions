## SELECT / UNSELECT ALL CHECKBOXES

```html
<table>
    <thead>
        <tr>
            <th>
                <button id="selectAll" type="button">Select All</button>
            </th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input type="checkbox" name="checkbox" />
            </td>
            <td>Hari</td>
            <td>Mutual of Omaha</td>
            <td>Omaha</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="checkbox" />
            </td>
            <td>Sundaragopalan</td>
            <td>CUB</td>
            <td>Hyderabad</td>
        </tr>
    </tbody>
</table>
```

```js
const selectAllButton = document.getElementById("selectAll");

selectAllButton.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    // check if button has allChecked class
    if (selectAllButton.classList.contains("allChecked")) {
        checkboxes.forEach(checkbox => checkbox.checked = false);
    } else {
        checkboxes.forEach(checkbox => checkbox.checked = true);
    }

    selectAllButton.classList.toggle("allChecked");
})
```
