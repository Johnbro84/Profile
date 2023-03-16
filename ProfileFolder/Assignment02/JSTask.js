document.addEventListener('DOMContentLoaded', function() {
	const list = [];
	document.querySelector("#new_task").onsubmit = function() {
		const li = document.createElement('li');
		let task_info = document.querySelector('#task_title').value;
		let task_priority = document.querySelector('#priority').value;
		let task_pending = document.querySelector('input[name="status"]:checked').value;
		let new_task = `
							<span> ${task_info}, ${task_priority}, ${task_pending} </span>
							<button class="remove"> Remove </button>
							<button class="mark_as_complete"> Mark as complete </button>
						`;
		li.innerHTML = new_task
		document.querySelector("#task_list").append(li);
		document.querySelector("#task_title").value = '';
		document.querySelector("#priority").value = '';
		document.querySelector('input[name="status"]:checked').value = '';
		list.push(li);
		return false;
	}

	document.addEventListener('click', function(event) {
		element = event.target;
		if (element.className === 'remove') {
			element.parentElement.remove();
			list.splice(element.slot, 1);
		}
	})

	document.addEventListener('click', function(event) {
		element = event.target;
		if (element.className === 'mark_as_complete') {
			element.parentElement.style.textDecoration = "line-through";
		}
	})
})
