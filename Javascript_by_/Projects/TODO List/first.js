const form = document.querySelector("form");
const alltask = document.querySelector("#alltasks");
const input = document.getElementById("tasks");
const taskCount = document.getElementById("task-count");
const emptyState = document.getElementById("empty-state");

function updateTaskSummary() {
    const tasks = alltask.querySelectorAll(".task-item");
    const remaining = alltask.querySelectorAll(".task-item:not(.is-done)").length;
    taskCount.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} left`;
    emptyState.hidden = tasks.length > 0;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text=input.value.trim();
    if(text === "")
        return;
    const outer=document.createElement('div');
    outer.classList.add('task-item');

    const task=document.createElement('span');
    task.textContent=text;
    task.classList.add('task-text');
    const deletebtn=document.createElement('button')
    deletebtn.textContent='Delete';
    deletebtn.type='button';
    deletebtn.classList.add('delete-button');
    deletebtn.setAttribute("aria-label", `Delete task: ${text}`);

    const done=document.createElement('button')
    done.textContent='Done';
    done.type='button';
    done.classList.add('done-button');

    outer.append(task, done, deletebtn);
    alltask.append(outer);

    deletebtn.addEventListener('click', () => {
        outer.remove();
        updateTaskSummary();
    });
    done.addEventListener('click', () => {
        outer.classList.toggle("is-done");
        const isDone = outer.classList.contains("is-done");
        done.textContent = isDone ? "Undo" : "Done";
        done.setAttribute("aria-pressed", String(isDone));
        updateTaskSummary();
    });

    form.reset();
    input.focus();
    updateTaskSummary();
});

updateTaskSummary();