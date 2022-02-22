package paint;

import java.util.ArrayList;
import java.util.List;

public class Mock {
	
	private List<paint> paintList = new ArrayList<>();
	
	public Mock() {
		this.paintList.add(new paint(0, "White Nights", 650.5f, "watercolor"));
		this.paintList.add(new paint(1, "Sonet", 230.0f, "acrylics"));
		this.paintList.add(new paint(2, "Art Creation", 1299.9f, "oil paints"));
	}

	public List<paint> getPaintList() {
		return paintList;
	}

	public void setPaintList(List<paint> paintList) {
		this.paintList = paintList;
	}
	
}
