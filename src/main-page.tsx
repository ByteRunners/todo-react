import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const url = `http://localhost:4000/todos`;

interface ITodo {
  id: number;
  dec: string;
  status: boolean;
}

export default function MainPage() {
  const [items, setItems] = useState<ITodo[]>([]);
  const [refresh, setRefresh] = useState(0);
  const [newTodoDesc, setNewTodoDesc] = useState("");
  const [editTodoDesc, setEditTodoDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setItems(result);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const createNewTodo = async () => {
    if (!newTodoDesc.trim()) {
      alert("Come on it's empty description")
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dec: newTodoDesc,
        status: false,
      }),
    });

    if (response.ok) {
      setNewTodoDesc("");
      setRefresh((prev) => prev + 1);
    }
  };

  const openEditDialog = (todo: ITodo) => {
    setSelectedTodo(todo);
    setEditTodoDesc(todo.dec);
    setOpen(true);
  };

  const handleEditTodo = async () => {
    if (!editTodoDesc.trim()) {
      alert("Please enter a description!");
      return;
    }

    if (selectedTodo) {
      const response = await fetch(`${url}/${selectedTodo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dec: editTodoDesc,
          status: selectedTodo.status,
        }),
      });

      if (response.ok) {
        setOpen(false);
        setEditTodoDesc("");
        setSelectedTodo(null);
        setRefresh((prev) => prev + 1);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) setRefresh((prev) => prev + 1);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-YE", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="maindiv">
      <section className="todoplace">
        <div>
          <p className="titlefont">Good Morning, Mohammed! 🖐</p>
          <h3 className="descfont">Today, {formattedDate}</h3>
        </div>

        <section className="addbuttom">
          <Fab aria-label="add" onClick={createNewTodo}>
            <AddIcon />
          </Fab>
          <input
            type="text"
            value={newTodoDesc}
            onChange={(e) => setNewTodoDesc(e.target.value)}
            placeholder="Enter new todo description"
            className="todo-input"
          />
        </section>

        <section className="checksection">
          <div>
            {items.map((item) => (
              <div key={item.id} className="checkboxstyle">
                <FormControlLabel
                  control={<Checkbox defaultChecked={item.status} />}
                  label={item.dec}
                />
                <div className="editbuttom">
                  <Fab
                    aria-label="edit"
                    onClick={() => openEditDialog(item)}
                  >
                    <EditIcon style={{ color: "rgb(56, 173, 228)" }} />
                  </Fab>
                  <Fab
                    aria-label="delete"
                    onClick={() => deleteTodo(item.id)}
                  >
                    <DeleteIcon style={{ color: "rgb(224, 75, 75)" }} />
                  </Fab>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Dialog open={open} onClose={() => setOpen(false)} className="custom-dialog">
      <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={editTodoDesc}
            onChange={(e) => setEditTodoDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEditTodo}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
