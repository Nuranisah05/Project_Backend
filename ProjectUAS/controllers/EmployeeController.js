// import Model Employee
const Employee = require("../models/Employee");


// buat class EmployeeController
class EmployeeController {
  // buat fungsi
  async index(req, res) {
    //menampilkan data pegawai
    const employees = await Employee.all();

    const data = {
      message: "Menampilkan seluruh data pegawai",
      data: employees
    };

    res.status(200).json(data);

  }

  async store(req, res) {
    //memanggil method create
    const employees = await Employee.create(req.body);
    const data = {
      message: "Menambahkan data pegawai",
      data: employees,
    };

    res.status(201).json(data);

  }

  async update(req, res) {
    const { id } = req.params;

    const employees = await Employee.find(id);

    if (employees) {
      //mengupdate data
      const employeeUpdated = await Employee.update(id, req.body);
      const data = {
        message: "Menampilkan single resource data pegawai yang di-update",
        data: employeeUpdated,
      };

      res.status(200).json(data);

    }
    else {
      //mengirimkan data tidak ada
      const data = {
        message: "Data not found",
      };

      res.status(404).json(data);

    }
  }

  async destroy(req, res) {
    const { id } = req.params;


    const employee = await Employee.find(id);

    if (employee) {
      // Menghapus data
      await Employee.delete(id);
      const data = {
        message: "Menghapus data pegawai telah berhasil",
      };

      res.status(200).json(data);
    }
    else {
      // data tidak ada
      const data = {
        message: "Data not found",
      };

      res.status(404).json(data);
    }


  }

  async show(req, res) {
    const { id } = req.params;
    
    const employee = await Employee.find(id);

    if (employee) {
      const data = {
        message: "Menampilkan resource yang berhasil di tambahkan",
        data: employee,
      };

      res.status(201).json(data);

    }
    else {
      const data = {
        message: "All fields must be filled correcttly",
      };

      res.status(422).json(data);

    }

  }

  async search(req, res) {
    const { id } = req.params;


    const employee = await Employee.find(id);

    if (employee) {
      // Mencari data
      await Employee.search(id);
      const data = {
        message: "Get searched resource",
        data: "Menampilkan semua resource yang berhasil dicari"
      };

      res.status(200).json(data);
    }
    else {
      // data tidak ada
      const data = {
        message: "Data not found",
      };

      res.status(404).json(data);
    }
    
  }

  async active(req, res) {
    const { id } = req.params;

     await Employee.findByStatus(id);

    const data = {
      message: "Get active resource",
      total: "Menampilkan total resource yang aktif",
      data: "Menampilkan semua resource yang aktif"
    };

    res.status(200).json(data);

  }

  async inactive(req, res) {
    const { id } = req.params;
    
     await Employee.findByStatus(id);

    const data = {
      message: "Get inactive resource",
      total: "Menampilkan total resource yang  tidak aktif",
      data: "Menampilkan semua resource yang tidak aktif"
    };

    res.status(200).json(data);

  }

  async terminated(req, res) {
    const { id } = req.params;
    
     await Employee.findByStatus(id);

    const data = {
      message: "Get terminated resource",
      total: "Menampilkan total resource yang dihentikan",
      data: "Menampilkan semua resource yang dihentikan"
    };

    res.status(200).json(data);

  }
  
  


}


// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
