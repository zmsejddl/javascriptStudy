		var numbers = [2, 4, 6, 8, 10];

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}

		var result = 0;
		for(var i = 0; i < numbers.length; i++) {
			result += numbers[i];
		}
		numbers.push(result);
		
		showArray(numbers);