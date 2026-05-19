//Tạo 1 list of object Person gồm 3 phần tử: id, name, age.
//Hiển thị danh sách người dùng trong component People ra dạng danh sách
//có đánh số thứ tự, tên và tuổi của người dùng.


const People = () => {
  const peopleList = [
    { id: 1, name: "Nguyễn Văn An", age: 22 },
    { id: 2, name: "Trần Minh Khang", age: 18 },
    { id: 3, name: "Lê Hoàng Phúc", age: 15 },
    { id: 4, name: "Phạm Gia Bảo", age: 30 },
    { id: 5, name: "Đỗ Nhật Huy", age: 19 },
    { id: 6, name: "Bùi Khánh Linh", age: 25 },
    { id: 7, name: "Võ Thành Đạt", age: 17 },
    { id: 8, name: "Nguyễn Quốc Thịnh", age: 28 },
    { id: 9, name: "Trương Minh Đức", age: 21 },
    { id: 10, name: "Lý Gia Hân", age: 16 },
  ];

  const firstTeenager = peopleList.find(
    ({ age }) => age >= 13 && age <= 19
  );

  const sortedList = peopleList.sort((x, y) => {
    if (x.age === y.age) {
      return x.name.localeCompare(y.name);
    }

    return x.age - y.age;
  });

  return (
    <section>
      <h1>People List</h1>

      <ol>
        {sortedList.map(({ id, name, age }) => (
          <li key={id}>
            Name: {name} | Age: {age}
          </li>
        ))}
      </ol>

      <h3>First Teenager</h3>

      {firstTeenager ? (
        <div>
          {firstTeenager.name} - {firstTeenager.age} years old
        </div>
      ) : (
        <div>No result</div>
      )}
    </section>
  );
};

export default People;