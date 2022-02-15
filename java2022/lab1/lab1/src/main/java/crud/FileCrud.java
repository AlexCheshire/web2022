package crud;

import files.FileIO;
import files.FileIOInterface;
import paint.paint;

public class FileCrud implements Lab2CrudInterface {
	
	FileIOInterface fio;
	
	public FileCrud() {
		this.fio = new FileIO();
	}
	

	@Override
	public paint readPaint() {
		
		return (paint)fio.loadFromFile();
	}

	@Override
	public void updatePaint(paint paint) {
		fio.saveToFile(paint);

	}

}
