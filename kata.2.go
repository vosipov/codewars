package kata

func HoopCount(n int) string {
	var message string;

	if (n >= 10) {
		message = "Great, now move on to tricks"
	}
	else {
		message = "Keep at it until you get it"
	}
  
	return message
}